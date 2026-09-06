"use client";

import {
  CheckCircle,
  FilePdf,
  SpinnerGap,
  Trash,
  UploadSimple,
  WarningCircle,
} from "@phosphor-icons/react";
import { ChangeEvent, DragEvent, FormEvent, useState } from "react";

type AuditResult = {
  score?: number;
  verdict?: string;
  summary?: string;
  strengths?: string[];
  gaps?: string[];
  nextSteps?: string[];
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function CvAuditForm() {
  const endpoint = process.env.NEXT_PUBLIC_CV_AUDIT_ENDPOINT;
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "success">("idle");
  const [result, setResult] = useState<AuditResult | null>(null);

  function validateFile(candidate?: File) {
    if (!candidate) return;
    const extensionAllowed = /\.(pdf|docx)$/i.test(candidate.name);

    if ((!ALLOWED_TYPES.includes(candidate.type) && !extensionAllowed) || candidate.size > MAX_FILE_SIZE) {
      setFile(null);
      setError("Please choose a PDF or DOCX file no larger than 5 MB.");
      return;
    }

    setFile(candidate);
    setError("");
    setStatus("idle");
    setResult(null);
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    validateFile(event.target.files?.[0]);
  }

  function onDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    validateFile(event.dataTransfer.files?.[0]);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!file) {
      setError("Add your CV before starting the audit.");
      return;
    }

    if (!endpoint) {
      setStatus("ready");
      return;
    }

    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    formData.set("cv", file);

    try {
      const response = await fetch(endpoint, { method: "POST", body: formData });
      if (!response.ok) throw new Error("The audit service could not process this CV.");
      const data = (await response.json()) as AuditResult;
      setResult(data);
      setStatus("success");
    } catch (requestError) {
      setStatus("idle");
      setError(requestError instanceof Error ? requestError.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="audit-app">
      <div className="audit-app-head">
        <div><span>CV audit</span><h2>Check your fit for Germany.</h2></div>
        <span className={`audit-live-state ${endpoint ? "is-live" : ""}`}><i />{endpoint ? "Analysis connected" : "Preview mode"}</span>
      </div>

      <form className="audit-form" onSubmit={onSubmit}>
        <div className="audit-form-fields">
          <div className="field"><label htmlFor="audit-name">Your name</label><input id="audit-name" name="name" required autoComplete="name" placeholder="Full name" /></div>
          <div className="field"><label htmlFor="audit-email">Email address</label><input id="audit-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></div>
          <div className="field"><label htmlFor="target-role">Target role</label><input id="target-role" name="targetRole" required placeholder="e.g. Mechanical Engineer" /></div>
          <div className="field"><label htmlFor="experience">Experience level</label><select id="experience" name="experience" required defaultValue=""><option value="" disabled>Select experience</option><option value="student">Student / graduate</option><option value="junior">1–3 years</option><option value="mid">4–7 years</option><option value="senior">8+ years</option></select></div>
        </div>

        <label
          className={`cv-dropzone ${file ? "has-file" : ""}`}
          htmlFor="cv-file"
          onDragOver={(event) => event.preventDefault()}
          onDrop={onDrop}
        >
          <input id="cv-file" name="cv" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={onFileChange} />
          {file ? (
            <>
              <span className="dropzone-icon"><FilePdf size={29} /></span>
              <div><strong>{file.name}</strong><span>{(file.size / 1024 / 1024).toFixed(2)} MB · Ready to audit</span></div>
              <button type="button" aria-label="Remove CV" onClick={(event) => { event.preventDefault(); setFile(null); setStatus("idle"); }}><Trash size={19} /></button>
            </>
          ) : (
            <>
              <span className="dropzone-icon"><UploadSimple size={29} /></span>
              <div><strong>Drop your CV here</strong><span>or tap to choose a PDF or DOCX · max 5 MB</span></div>
              <span className="browse-file">Choose file</span>
            </>
          )}
        </label>

        <label className="audit-consent"><input type="checkbox" name="consent" required /><span>I agree that my CV and details may be processed to produce this audit.</span></label>

        {error && <p className="audit-message audit-error"><WarningCircle size={18} />{error}</p>}
        {status === "ready" && <p className="audit-message audit-ready"><CheckCircle size={18} />Your CV passed the file checks. The analysis service is not connected yet, so the file has not left your browser.</p>}

        <button className="button audit-submit" type="submit" disabled={status === "loading"}>
          {status === "loading" ? <><SpinnerGap className="audit-spinner" size={19} />Analysing your profile</> : <><span>{endpoint ? "Run my CV audit" : "Prepare my CV for audit"}</span><UploadSimple size={19} /></>}
        </button>
      </form>

      {status === "success" && result && (
        <section className="audit-result" aria-live="polite">
          <div className="audit-result-score"><span>Profile match</span><strong>{result.score ?? "—"}<small>/100</small></strong></div>
          <div className="audit-result-copy"><span>{result.verdict ?? "Your audit is ready"}</span><h3>{result.summary ?? "Review the signals below and focus your next application."}</h3></div>
          <ResultList title="Strengths" items={result.strengths} />
          <ResultList title="Gaps to address" items={result.gaps} />
          <ResultList title="Recommended next steps" items={result.nextSteps} />
        </section>
      )}
    </div>
  );
}

function ResultList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return <div className="audit-result-list"><h4>{title}</h4><ul>{items.map((item) => <li key={item}><CheckCircle size={16} />{item}</li>)}</ul></div>;
}

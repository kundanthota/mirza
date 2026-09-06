# CV audit API contract

The `/jobs` page works without a backend in preview mode. To activate analysis, set `NEXT_PUBLIC_CV_AUDIT_ENDPOINT` locally or add a GitHub Actions repository variable named `CV_AUDIT_ENDPOINT`.

The browser sends a `POST` request as `multipart/form-data` with these fields:

- `cv`: PDF or DOCX, maximum 5 MB
- `name`: candidate name
- `email`: candidate email
- `targetRole`: the role the candidate wants
- `experience`: `student`, `junior`, `mid`, or `senior`
- `consent`: `on`

The endpoint should return JSON in this shape:

```json
{
  "score": 76,
  "verdict": "Promising match with clear gaps",
  "summary": "Your experience aligns well, but the CV needs stronger evidence and clearer German-market positioning.",
  "strengths": ["Relevant domain experience", "Clear technical skills"],
  "gaps": ["Impact is not quantified", "German level is missing"],
  "nextSteps": ["Rewrite the profile summary", "Add measurable outcomes"]
}
```

Before launch, the backend should enforce its own file signature and size validation, malware scanning, rate limits, CORS for the production site, encrypted transport, consent logging, and a defined retention/deletion policy. Do not rely only on the browser validation.

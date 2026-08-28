import {
  Briefcase,
  Code,
  GraduationCap,
  IdentificationCard,
  Translate,
} from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/services";

const iconMap = {
  passport: IdentificationCard,
  briefcase: Briefcase,
  graduation: GraduationCap,
  language: Translate,
  code: Code,
};

export function ServiceIcon({ icon, size = 28 }: { icon: Service["icon"]; size?: number }) {
  const Icon = iconMap[icon];
  return <Icon size={size} weight="regular" aria-hidden="true" />;
}

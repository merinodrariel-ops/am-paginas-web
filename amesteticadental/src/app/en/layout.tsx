import HtmlLangSetter from "@/components/HtmlLangSetter";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLangSetter lang="en" />
      {children}
    </>
  );
}

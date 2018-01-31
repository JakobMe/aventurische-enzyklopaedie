interface DangerousInnerHTML {
  __html: string;
}

export default function dangerousInnerHTML(html: string): DangerousInnerHTML {
  return {
    __html: html
  };
}

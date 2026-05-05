import type { SchemaItem } from "@/lib/schema";

type JsonLdProps = {
  schema: SchemaItem | SchemaItem[];
};

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Renders a JSON-LD structured-data script. The data is static and
// developer-authored (never user input), so inlining via
// dangerouslySetInnerHTML is safe.
type JsonLdData = Record<string, unknown>;

export default function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

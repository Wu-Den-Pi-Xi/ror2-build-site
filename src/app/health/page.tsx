import { getHealthStatus } from "@/lib/health";

export default async function HealthPage() {
  const health = await getHealthStatus();

  return (
    <section className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-6 py-12">
      <p className="font-ui text-sm uppercase tracking-[0.2em]">
        System Status
      </p>

      <h1 className="mt-2 font-display text-4xl font-bold">
        Health
      </h1>

      <div className="mt-10 rounded-lg border border-white/10 p-6">
        <p className="font-ui">
          Status: <span className="font-numeric">{health.status}</span>
        </p>

        <p className="mt-2 font-ui">
          Service: {health.service}
        </p>

        <p className="mt-2 font-ui">
          Checked:{" "}
          <span className="font-numeric">{health.timestamp}</span>
        </p>
      </div>
    </section>
  );
}
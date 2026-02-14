export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white/55 p-5 shadow-sm ring-1 ring-white/40">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-widest text-black/60">
              FRASE DEL DÍA
            </div>
            <div className="text-xl font-bold">Fuerza y honor.</div>
          </div>
          <div className="text-sm font-medium text-black/70">
            Próximo partido · Convocatoria abierta
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white/55 p-5 shadow-sm ring-1 ring-white/40">
          <div className="text-sm font-semibold text-black/70">Próximo partido</div>
          <div className="mt-2 text-2xl font-extrabold">Inter de Verdún vs Nacional</div>
          <div className="mt-1 text-sm text-black/70">Jueves · 20:15 · Velòdrom F7</div>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90">
              VOY
            </button>
            <button className="flex-1 rounded-xl bg-white/70 px-4 py-3 text-sm font-semibold text-black ring-1 ring-black/10 hover:bg-white">
              NO VOY
            </button>
          </div>

          <div className="mt-3 text-xs text-black/60">
            Estado: <span className="font-semibold text-black/70">Sin responder</span>
          </div>
        </div>

        <div className="rounded-2xl bg-white/55 p-5 shadow-sm ring-1 ring-white/40">
          <div className="text-sm font-semibold text-black/70">Mis estadísticas</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Partidos", "0"],
              ["Goles", "0"],
              ["Asistencias", "0"],
              ["MVPs", "0"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/55 p-4 ring-1 ring-white/50">
                <div className="text-xs font-semibold tracking-widest text-black/50">
                  {k.toUpperCase()}
                </div>
                <div className="mt-1 text-2xl font-extrabold">{v}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-black/60">
            (De momento es demo; luego lo conectamos a la base de datos.)
          </div>
        </div>
      </section>
    </div>
  );
}

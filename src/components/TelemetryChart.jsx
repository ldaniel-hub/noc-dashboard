export function TelemetryChart({ fleet }) {
  const points = fleet.slice(0, 12).map((vehicle, index) => ({ label: vehicle.id || `V-${index + 1}`, value: Math.min(Number(vehicle.vel) || 0, 160) }));
  return (
    <div className="card glass-card mb-4"><div className="card-body"><div className="d-flex justify-content-between align-items-center mb-3"><h5 className="text-info mb-0">Velocidade média da frota</h5><small className="text-secondary">Atualização em tempo real</small></div><div className="telemetry-chart" role="img" aria-label="Gráfico de velocidade média dos veículos">
      {points.length === 0 ? <span className="text-secondary">Sem telemetria disponível.</span> : points.map((point) => <div className="telemetry-column" key={point.label}><span className="small text-info">{point.value}</span><div className="telemetry-bar" style={{ height: `${Math.max(point.value / 2, 4)}%` }} /><small className="text-secondary">{point.label}</small></div>)}
    </div></div></div>
  );
}
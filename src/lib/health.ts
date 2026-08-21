export async function getHealthStatus() {
  return {
    status: "healthy",
    service: "ROR2 Build Site",
    timestamp: new Date().toISOString(),
  };
}
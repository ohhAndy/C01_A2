# Deliverables

**Pipeline Diagram:**
![Pipeline Diagram](diagram.png)

**Tech Overview:** GitHub Actions is used for orchestration. Deployment is containerized using Docker, and we utilize the GitHub Actions Ubuntu-Latest Runners as our virtualized hosting environment to execute the canary deployment and promotion logic.

**Canary Analysis:** The pipeline performs a smoke test by hitting the `/api/health/canary-check` endpoint. It validates that the service returns a specific JSON object confirming `5 + 7 = 12`.

**Canary Promotion:** After validating the canary image in our analysis, we replace the existing production container with the new image.

**Downtime/Impact:** Estimated downtime is ~5-10 seconds while the production container restarts with the new image. This impact is minimal as the analysis ensures the new version is functional before the switch.

**Link:** [.github/workflows/cd.yml](https://github.com/ohhAndy/C01_A2/blob/main/.github/workflows/cd.yml)

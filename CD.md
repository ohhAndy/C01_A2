# Deliverable Content for CD.pdf

**Pipeline Diagram:**
1. **Successful CI run on main branch** *(Triggers the CD pipeline)*
   &rarr; ↓
2. **deploy-canary** *(Pulls Image & Spins up Canary Port)*
   &rarr; ↓
3. **canary-analysis** *(Health Check Endpoint `?num1=5&num2=7` = 12)*
   &rarr; ↓ (If Success)
4. **promotion** *(Deploy 100% Traffic, Stop Old Prod Container)*

*(Note: If Analysis Fails at step 3, the Pipeline Stops and Reports Failure)*

**Tech Overview:** GitHub Actions is used for the orchestration. Deployment is containerized using Docker.

**Canary Analysis:** The pipeline performs a smoke test by hitting the `/api/health/canary-check` endpoint. It validates that the service returns a specific JSON object confirming `5 + 7 = 12`.

**Canary Promotion:** After validating the canary image in our analysis, we replace the existing production container with the new image.

**Downtime/Impact:** Estimated downtime is ~5-10 seconds while the production container restarts with the new image. This impact is minimal as the analysis ensures the new version is functional before the switch.

**Link:**
- GitHub Actions Workflow: [.github/workflows/cd.yml](https://github.com/ohhAndy/C01_A2/blob/main/.github/workflows/cd.yml)

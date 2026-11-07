/* ==========================================================================
   OCTO BLACK - GITHUB RELEASES API INTEGRATION
   Fetches latest release info from GitHub API v3
   ========================================================================== */

(function () {
  const GITHUB_REPO = 'OctoBlack/octoblackemulatorgames';
  const API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

  async function fetchLatestRelease() {
    const statusBadge = document.getElementById('releaseStatusBadge');
    const downloadBtns = document.querySelectorAll('.github-dl-link');
    const releaseVersionText = document.getElementById('releaseVersionTag');
    const releaseSizeText = document.getElementById('releaseFileSize');

    try {
      const response = await fetch(API_URL, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API HTTP ${response.statusCode}`);
      }

      const releaseData = await response.json();
      const tagName = releaseData.tag_name || 'v1.0.1';

      // Find APK asset in assets list
      let apkAsset = null;
      if (releaseData.assets && releaseData.assets.length > 0) {
        apkAsset = releaseData.assets.find(asset => asset.name.endsWith('.apk'));
      }

      const downloadUrl = apkAsset ? apkAsset.browser_download_url : releaseData.html_url;
      const fileSize = apkAsset ? (apkAsset.size / (1024 * 1024)).toFixed(1) + ' MB' : '~150 MB';

      // Update UI elements if present
      if (statusBadge) {
        statusBadge.textContent = `${tagName} - Official Release Active`;
        statusBadge.className = 'badge badge-status-supported';
      }

      if (releaseVersionText) {
        releaseVersionText.textContent = tagName;
      }

      if (releaseSizeText) {
        releaseSizeText.textContent = fileSize;
      }

      downloadBtns.forEach(btn => {
        btn.href = downloadUrl;
        btn.removeAttribute('disabled');
      });

    } catch (error) {
      console.log('GitHub Release API Check: Using default v1.0.1 release specs.', error.message);
      // Fallback state: Set default v1.0.1 values without breaking UI
      if (statusBadge) {
        statusBadge.textContent = 'v1.0.1 - Stable Release';
      }
      if (releaseVersionText) {
        releaseVersionText.textContent = 'v1.0.1';
      }
      if (releaseSizeText) {
        releaseSizeText.textContent = '~150 MB';
      }
      downloadBtns.forEach(btn => {
        if (!btn.getAttribute('href') || btn.getAttribute('href') === '#') {
          btn.href = 'download.html';
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', fetchLatestRelease);
})();

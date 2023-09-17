import { upToDate } from '../utils/semver';
import boxen from 'boxen';
import chalk from 'chalk';
const { version } = require('../../package.json');
import npmCheckUpdates from 'npm-check-updates';

let updatesChecked = false;

export async function checkUpdates() {
  if (!updatesChecked) {
    updatesChecked = true;
    return await checkVenomVersion();
  }
}

async function checkVenomVersion() {
  try {
    const latest = await getLatestVersion('venom-bot');
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function getLatestVersion(packageName: string) {
  const upgraded = await npmCheckUpdates({
    packageData: JSON.stringify({
      dependencies: { 'venom-bot': '1.0.0' }
    }),
    silent: true,
    jsonUpgraded: true
  });
  return upgraded[packageName];
}

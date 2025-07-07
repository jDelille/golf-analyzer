import { badges } from "@/badges/badges";
import { ShotData } from "@/firebase/uploadRangeSessionData";

export function getUnlockedBadgesFromShots(shots: ShotData[]) {
  const unlocked: Set<string> = new Set();

  // Helper: convert string number fields to numbers safely
  function toNumber(value: string | undefined) {
    if (!value) return 0;
    return Number(value.replace(/[^\d.-]/g, "")) || 0;
  }

  // Get all clubs shot in this session
  const clubsShot = new Set(shots.map((shot) => shot.Club));

  // Collect stats for checking badges
  const ballSpeeds = shots.map((s) => toNumber(s["Ball Speed(mph)"]));
  const carryDistances = shots.map((s) => toNumber(s["Carry(yd)"]));
  const attackAngles = shots.map((s) => toNumber(s["Attack Angle"]));
  const backSpins = shots.map((s) => toNumber(s["Back Spin"] || s["BackSpin"])); // just in case
  const launchAngles = shots.map((s) => toNumber(s["Launch Angle"]));
  const sideSpins = shots.map((s) => toNumber(s["Side Spin"] || s["Side-Spin"] || s["SideSpin"])); // if you have this data

  // Check badges

  // Full Bag (all clubs in bag) - if you have a standard list of clubs:
  const standardClubs = [
    "Driver",
    "3 Wood",
    "5 Wood",
    "3 Hybrid",
    "4 Hybrid",
    "5 Iron",
    "6 Iron",
    "7 Iron",
    "8 Iron",
    "9 Iron",
    "Pitching Wedge",
    "Sand Wedge",
    "Lob Wedge",
    "Putter",
  ];
  const hasFullBag = standardClubs.every((club) => clubsShot.has(club));
  if (hasFullBag) unlocked.add("full-bag");

  // Speed Starter (ball speed > 100 mph)
  if (ballSpeeds.some((speed) => speed > 100)) unlocked.add("speed-100");

  // Speed Explorer (ball speed > 120 mph)
  if (ballSpeeds.some((speed) => speed > 120)) unlocked.add("speed-120");

  // Carry King (carry > 275 yards)
  if (carryDistances.some((carry) => carry > 275)) unlocked.add("carry-king");

  // Breaking 100 (carry > 100 yards)
  if (carryDistances.some((carry) => carry > 100)) unlocked.add("carry-100");

  // First Big Carry (carry > 150 yards)
  if (carryDistances.some((carry) => carry > 150)) unlocked.add("carry-150");

  // Spin Beginner (backspin > 5000 rpm)
  if (backSpins.some((spin) => spin > 5000)) unlocked.add("backspin-5000");

  // Launch Learner (launch angle > 10 degrees)
  if (launchAngles.some((angle) => angle > 10)) unlocked.add("launch-10");

  // Side Spin Explorer (side spin > 500 rpm in either direction)
  if (sideSpins.some((spin) => Math.abs(spin) > 500)) unlocked.add("side-spin-500");

  // Neutral Striker (attack angle between -1 and +1 degrees)
  if (attackAngles.some((angle) => angle >= -1 && angle <= 1)) unlocked.add("attack-neutral");

  // The "Tee Off" badge for first session is handled elsewhere, so no need to check here

  return Array.from(unlocked);
}
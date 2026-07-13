/**
 * Curated, verified dental imagery from Unsplash.
 * Every URL here has been visually inspected to confirm dental relevance.
 * When swapping in original photography, replace these constants and the
 * site will update everywhere.
 */
const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMG = {
  // Local user-supplied hero — technician working at the lab bench
  heroLabBench: "/brand/hero3.jpg",
  heroTeam: "/brand/hero1.png",
  heroCraft: u("1776406987595-ba14f3510c07"),
  heroPatient: u("1617812191081-2a24e3f30e45"),
  dentistExam: u("1606811971618-4486d14f3f99"),
  dentistTreating: u("1657470179447-0f5aa16daa91"),
  xrayReview: u("1588776814546-1ffcf47267a5"),
  clinicInterior: u("1629909613654-28e377c37b09"),
  operatoryTeal: u("1643660527098-559f89e45a92"),
  operatoryBlue: u("1643660526741-094639fbe53a"),
  dentalLab: u("1597765221336-1f65bb4c4fee"),
  implantModel: u("1593022356769-11f762e25ed9"),
  dentureModel: u("1562330743-fbc6ef07ca78"),
  partialModel: u("1468493858157-0da44aaf1d13"),
  aligner: u("1609840114035-3c981b782dfe"),
  smileWomen: u("1617812191081-2a24e3f30e45"),
  smileMan: u("1611695434369-a8f5d76ceb7b"),
  smileCloseup: u("1663182234283-28941e7612da"),
} as const;

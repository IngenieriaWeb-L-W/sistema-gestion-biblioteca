"use client";

import { useAppDispatch } from "@/config/redux/store.config";
import {
  fetchActiveResources,
  fetchActiveUsers,
  fetchDailyLoans,
} from "@/middleware/landing-stats.middleware";
import { useEffect, useState } from "react";

type LandingStats = {
  totalUsers: number;
  totalResources: number;
  dailyLoans: number;
};

export const useLandingStats = (): LandingStats => {
  const [landingStats, setLandingStats] = useState<LandingStats>({
    totalUsers: 0,
    totalResources: 0,
    dailyLoans: 0,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(fetchActiveUsers()),
      dispatch(fetchActiveResources()),
      dispatch(fetchDailyLoans()),
    ]).then(([totalUsers, totalResources, dailyLoans]) => {
      setLandingStats({ totalUsers, totalResources, dailyLoans });
    });
  }, [dispatch]);

  return landingStats;
};

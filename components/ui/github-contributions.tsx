"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ContributionDay {
  date: string;
  count: number;
  color: string;
  level: 0 | 1 | 2 | 3 | 4;
}

interface Contribution {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              contributionCount: number;
              date: string;
              color: string;
            }>;
          }>;
        };
      };
    };
  };
}

interface GitHubContributionsProps {
  className?: string;
}

const GitHubContributions: FC<GitHubContributionsProps> = ({ className }) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github/contributions");
        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const result: Contribution = await response.json();
        if (!result.data?.user?.contributionsCollection?.contributionCalendar) {
          throw new Error("Invalid response format");
        }

        const contributionData =
          result.data.user.contributionsCollection.contributionCalendar;

        const allContributions: ContributionDay[] = [];
        contributionData.weeks.forEach((week) => {
          week.contributionDays.forEach((day) => {
            let level: 0 | 1 | 2 | 3 | 4 = 0;
            if (day.contributionCount > 0) level = 1;
            if (day.contributionCount >= 4) level = 2;
            if (day.contributionCount >= 8) level = 3;
            if (day.contributionCount >= 12) level = 4;

            allContributions.push({
              date: day.date,
              count: day.contributionCount,
              color: day.color,
              level,
            });
          });
        });

        setTotalContributions(contributionData.totalContributions);
        setContributions(allContributions);
        setError(null);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        setError("Failed to load contributions");
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-4 text-center text-muted-foreground">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 text-center">
        <span className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {totalContributions.toLocaleString()} Contributions in the last year
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex flex-wrap gap-1 w-full min-w-[800px] justify-center">
          {contributions.map((day, i) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: i * 0.001 }}
              className={`
                w-3 h-3 rounded-sm
                ${day.level === 0 && "bg-border dark:bg-border/50"}
                ${day.level === 1 && "bg-blue-500/20 dark:bg-blue-500/30"}
                ${day.level === 2 && "bg-blue-500/40 dark:bg-blue-500/50"}
                ${day.level === 3 && "bg-blue-500/60 dark:bg-blue-500/70"}
                ${day.level === 4 && "bg-blue-500 dark:bg-blue-500/90"}
              `}
              title={`${day.count} contributions on ${new Date(
                day.date
              ).toLocaleDateString()}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubContributions;

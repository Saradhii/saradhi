"use client";

import { GitHubCalendar, Activity } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useState } from "react";

interface GitHubCalendarWrapperProps {
  username: string;
}

export function GitHubCalendarWrapper({ username }: GitHubCalendarWrapperProps) {
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const [hasNoData, setHasNoData] = useState(false);

  // Generate last 5 years for selection
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const theme = {
    light: ["#ebedf0", "#c6c6c6", "#9e9e9e", "#696969", "#333333"],
    dark: ["#161b22", "#3d3d3d", "#6b6b6b", "#9a9a9a", "#d4d4d4"],
  };

  // Transform data to check for empty years and handle gracefully
  const transformData = (data: Activity[]): Activity[] => {
    if (data.length === 0) {
      setHasNoData(true);
      // Return minimal data to prevent the error
      const today = new Date().toISOString().split("T")[0];
      return [{ date: today, count: 0, level: 0 as const }];
    }
    setHasNoData(false);
    return data;
  };

  const handleYearChange = (year: number | undefined) => {
    setHasNoData(false);
    setSelectedYear(year);
  };

  return (
    <div className="space-y-4">
      {/* Year Selector */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => handleYearChange(undefined)}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            selectedYear === undefined
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-accent"
          }`}
        >
          Current
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearChange(year)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              selectedYear === year
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Calendar */}
      <div>
        {hasNoData ? (
          <div className="py-8 text-muted-foreground">
            No contributions found for {selectedYear}
          </div>
        ) : (
          <GitHubCalendar
            username={username}
            year={selectedYear}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            theme={theme}
            blockSize={10}
            blockMargin={2}
            fontSize={11}
            transformData={transformData}
          />
        )}
      </div>
    </div>
  );
}

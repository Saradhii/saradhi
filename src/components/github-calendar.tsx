"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

interface GitHubCalendarWrapperProps {
  username: string;
}

export function GitHubCalendarWrapper({ username }: GitHubCalendarWrapperProps) {
  const { resolvedTheme } = useTheme();

  const theme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username={username}
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        theme={theme}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
      />
    </div>
  );
}

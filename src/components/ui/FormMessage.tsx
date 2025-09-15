import { cn } from "@/lib/utils";

interface FormMessageProps {
  children: React.ReactNode;
  type?: "error" | "success" | "info";
  className?: string;
}

export function FormMessage({ children, type = "error", className }: FormMessageProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium",
        {
          "text-destructive": type === "error",
          "text-success": type === "success",
          "text-muted-foreground": type === "info",
        },
        className
      )}
    >
      {children}
    </p>
  );
}
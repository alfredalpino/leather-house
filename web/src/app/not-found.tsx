import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pt-[72px]">
      <div className="container-editorial py-24 text-center max-w-lg mx-auto">
        <p className="text-[11px] tracking-[0.2em] uppercase text-muted">404</p>
        <h1 className="mt-3 font-display text-4xl">Page not found</h1>
        <p className="mt-4 text-muted">
          This path is not part of the Leather House mockup.
        </p>
        <Button href="/" className="mt-8">
          Return home
        </Button>
      </div>
    </div>
  );
}

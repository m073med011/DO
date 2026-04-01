import Image from "@/components/shared/CustomImage";
import { Link } from "@/i18n/routing";

interface ExploreProps {
  title: string;
  path?: string;
}

export default function Explore({ title, path = "/" }: ExploreProps) {
  return (
    <Link href={path.startsWith('/') ? path : `/${path}`}>
      <div className="group relative flex w-fit cursor-pointer items-center justify-center gap-4 py-2 pr-4 text-white">
        <span className="cursor-pointer text-sm font-normal">{title}</span>
        <span className="relative z-20 transition-all duration-300 ease-in-out group-hover:translate-x-0.5">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={16}
            height={16}
            loading="lazy"
          />
        </span>
        <div className="absolute right-1 top-0.5 z-10 h-8 w-8 rounded-full border-2 border-primary bg-transparent opacity-20 transition-all duration-300 ease-in-out group-hover:opacity-40" />
      </div>
    </Link>
  );
}


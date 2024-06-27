import Image from "next/image";
import { Poppins } from "next/font/google";
import logo from '@/public/streamx_logo.png'
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-4">
        <Image
          src={logo}
          alt="StreamX"
          height="80"
          width="80"
        />
      </div>
      <div className={cn(
        "flex flex-col items-center",
        font.className,
      )}>
        <p className="text-3xl text-white font-semibold">
          StreamX
        </p>
        <p className="text-sm text-white text-muted-foreground">
          Let&apos;s Stream
        </p>
      </div>
    </div>
  );
};

'use client';
import { SquidWidget } from "@0xsquid/widget";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main
      className={`flex min-h-screen flex-col items-center justify-between`}>
      <SquidWidget
        config={{
          integratorId: 'parasail-deploy-1f6056f1-2d36-4963-97b3-f0b8af73ca17',
          apiUrl: 'https://apiplus.squidrouter.com',
          theme: {
            // content
            'content-100': '#17191C',
            'content-200': '#292C32',
            'content-300': '#292C32',
            'content-400': '#676B7E',
            'content-500': '#8A8FA8',
            'content-600': '#A7ABBE',
            'content-700': '#D1D6E0',
            'content-800': '#EDEEF3',
            'content-900': '#FBFBFD',
            // accent
            'accent-300': '#8C53C5',
            'accent-400': '#9E79D2',
            'accent-500': '#B893EC',
            'accent-700': '#E3D0FD',
            // status
            'status-positive': '#17CF26',
            'status-negative': '#FF5B4D',
            'status-warning': '#EC9213',
            // highlight
            'highlight-700': '#E4FE53',
          },
        }}
      />
      {/* <iframe
        title="squid_widget"
        width={isMobile ? '100%' : 430}
        height="684"
        src="https://widget.squidrouter.com/iframe?config=%7B%22integratorId%22%3A%22squid-swap-widget%22%2C%22companyName%22%3A%22Custom%22%2C%22style%22%3A%7B%22neutralContent%22%3A%22%23657790%22%2C%22baseContent%22%3A%22%23072146%22%2C%22base100%22%3A%22%23ffffff%22%2C%22base200%22%3A%22%23f5f8fe%22%2C%22base300%22%3A%22%23DADADA%22%2C%22error%22%3A%22%23ea4f2d%22%2C%22warning%22%3A%22%23f7c752%22%2C%22success%22%3A%22%2384d65a%22%2C%22primary%22%3A%22%23336cec%22%2C%22secondary%22%3A%22%23336cec%22%2C%22secondaryContent%22%3A%22%23657790%22%2C%22neutral%22%3A%22%23ffffff%22%2C%22roundedBtn%22%3A%22999px%22%2C%22roundedCornerBtn%22%3A%22999px%22%2C%22roundedBox%22%3A%221rem%22%2C%22roundedDropDown%22%3A%22999px%22%7D%2C%22slippage%22%3A1.5%2C%22infiniteApproval%22%3Afalse%2C%22enableExpress%22%3Atrue%2C%22apiUrl%22%3A%22https%3A%2F%2Fapi.squidrouter.com%22%2C%22comingSoonChainIds%22%3A%5B%5D%2C%22titles%22%3A%7B%22swap%22%3A%22Swap%22%2C%22settings%22%3A%22Settings%22%2C%22wallets%22%3A%22Wallets%22%2C%22tokens%22%3A%22Select%20Token%22%2C%22chains%22%3A%22Select%20Chain%22%2C%22history%22%3A%22History%22%2C%22transaction%22%3A%22Transaction%22%2C%22allTokens%22%3A%22Select%20Token%22%2C%22destination%22%3A%22Destination%20address%22%2C%22depositAddress%22%3A%22Deposit%20address%22%2C%22seimetamask%22%3A%22Important%20message!%22%7D%2C%22priceImpactWarnings%22%3A%7B%22warning%22%3A3%2C%22critical%22%3A5%7D%2C%22environment%22%3A%22mainnet%22%2C%22showOnRampLink%22%3Atrue%2C%22defaultTokens%22%3A%5B%5D%2C%22iframeBackgroundColorHex%22%3A%22%23f5f8fe%22%7D"></iframe> */}
    </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

import { LucideProps } from 'lucide-react';

const SKILL_LIST = [
  {
    id: 1,
    title: 'React JS & Native',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <path fill="#53C1DE" d="M37.358 31.952c0-2.87-2.399-5.195-5.358-5.195-2.959 0-5.358 2.326-5.358 5.195s2.4 5.195 5.358 5.195c2.96 0 5.358-2.326 5.358-5.195z"></path>
        <path
          fill="#53C1DE"
          fillRule="evenodd"
          d="M49.4 22.307c1.132-4.457 2.554-12.724-2.46-15.527-4.99-2.79-11.483 2.557-14.912 5.766-3.42-3.177-10.095-8.501-15.105-5.69-4.988 2.8-3.45 10.93-2.293 15.415C9.977 23.553 2 26.313 2 31.951c0 5.624 7.968 8.627 12.594 9.907-1.16 4.51-2.622 12.524 2.373 15.317 5.028 2.811 11.683-2.386 15.144-5.63 3.45 3.228 9.882 8.46 14.873 5.658 5.007-2.81 3.703-10.966 2.547-15.478C54.015 40.442 62 37.505 62 31.952c0-5.585-8.02-8.367-12.6-9.645zm-.568 17.027c-.759-2.33-1.784-4.81-3.038-7.37 1.197-2.5 2.182-4.946 2.92-7.262 3.358.944 10.723 3.1 10.723 7.25 0 4.188-7.068 6.365-10.605 7.382zM45.7 55.052c-3.724 2.09-9.256-2.913-11.804-5.29 1.69-1.793 3.38-3.878 5.029-6.192 2.9-.25 5.641-.658 8.126-1.215.814 3.192 2.39 10.598-1.351 12.697zm-27.453-.03c-3.724-2.082-2.022-9.233-1.168-12.555 2.458.527 5.178.906 8.086 1.135 1.66 2.264 3.398 4.346 5.15 6.17-2.164 2.03-8.326 7.342-12.068 5.25zM4.563 31.952c0-4.204 7.321-6.345 10.755-7.287.751 2.368 1.736 4.844 2.925 7.347-1.204 2.541-2.203 5.056-2.961 7.452-3.275-.909-10.719-3.306-10.719-7.512zM18.207 9.007c3.74-2.099 9.542 3.013 12.025 5.313-1.743 1.815-3.466 3.881-5.111 6.133-2.822.254-5.523.66-8.007 1.206-.931-3.618-2.642-10.555 1.093-12.652zM40.76 23.154c1.914.234 3.748.546 5.47.927a51.972 51.972 0 01-1.92 5.01 82.33 82.33 0 00-3.55-5.937zm-8.73-7.058a53.564 53.564 0 013.53 4.133 77.794 77.794 0 00-7.091-.002 55.319 55.319 0 013.56-4.13zM19.713 29.09a53.797 53.797 0 01-1.907-5.034 59.529 59.529 0 015.44-.905 72.606 72.606 0 00-3.533 5.939zm3.588 11.842a56.152 56.152 0 01-5.53-.862 54.702 54.702 0 011.945-5.135A72.617 72.617 0 0023.3 40.93zm8.799 7.052a56.283 56.283 0 01-3.61-4.189c2.376.09 4.756.09 7.132-.012a53.223 53.223 0 01-3.522 4.201zm12.233-13.139a51.812 51.812 0 012.015 5.118c-1.74.385-3.618.695-5.597.925a82.235 82.235 0 003.582-6.043zm-6.838 6.344a82.972 82.972 0 01-10.927.02 69.846 69.846 0 01-5.493-9.196 69.816 69.816 0 015.462-9.18 74.545 74.545 0 0110.937.001 78.275 78.275 0 015.477 9.143 78.292 78.292 0 01-5.456 9.212zM45.66 8.933c3.74 2.092 2.075 9.521 1.258 12.752-2.49-.557-5.192-.971-8.022-1.229-1.65-2.276-3.357-4.346-5.072-6.137 2.514-2.35 8.131-7.457 11.836-5.386z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Next JS',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_63_193)">
          <path
            fill="#0F172A"
            d="M47.498 60.01c-.238.126-.218.166.01.05a.62.62 0 00.19-.122c0-.042 0-.042-.2.072zm.48-.26c-.114.094-.114.094.022.032a.497.497 0 00.136-.094c0-.054-.032-.042-.158.062zm.312-.188c-.114.094-.114.094.022.032a.492.492 0 00.136-.096c0-.05-.032-.04-.158.064zm.316-.186c-.114.094-.114.094.018.03.074-.04.136-.082.136-.094 0-.05-.032-.04-.154.064zm.426-.282c-.218.146-.294.24-.094.136.134-.082.362-.262.322-.262-.086.032-.158.086-.23.126h.002zM29.906.022c-.146.01-.584.05-.968.082-9.096.824-17.606 5.72-23 13.262A31.656 31.656 0 00.29 27.344C.032 29.104 0 29.624 0 32.01c0 2.384.032 2.896.29 4.656C2.032 48.688 10.584 58.78 22.176 62.52c2.086.666 4.272 1.126 6.762 1.408.968.104 5.154.104 6.122 0 4.304-.48 7.938-1.542 11.534-3.376.552-.28.656-.354.582-.416a681.781 681.781 0 01-5.218-6.99l-5.114-6.906-6.406-9.49a832.791 832.791 0 00-6.458-9.488c-.022 0-.05 4.218-.062 9.362-.022 9.01-.022 9.376-.136 9.584-.114.25-.302.458-.552.574-.198.094-.376.114-1.322.114h-1.082l-.282-.176a1.19 1.19 0 01-.416-.458l-.136-.282.01-12.542.022-12.542.198-.25c.126-.154.282-.28.458-.374.262-.126.366-.146 1.448-.146 1.27 0 1.48.05 1.814.416a1205.71 1205.71 0 017.718 11.624c4.158 6.304 9.834 14.906 12.624 19.126l5.074 7.678.25-.166a32.693 32.693 0 006.57-5.77 31.87 31.87 0 007.534-16.354c.258-1.76.29-2.282.29-4.666 0-2.386-.032-2.896-.29-4.656C61.97 15.336 53.418 5.244 41.826 1.502A33.967 33.967 0 0035.17.108c-.606-.062-4.742-.136-5.262-.082l-.002-.004zM43 19.376c.302.144.53.416.634.728.054.168.064 3.646.054 11.48l-.022 11.248-1.978-3.04-1.99-3.042v-8.166c0-5.294.022-8.262.05-8.408.094-.334.322-.614.626-.79.248-.126.344-.136 1.334-.136.926 0 1.084.01 1.292.126z"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_63_193">
            <path fill="#fff" d="M0 0H64V64H0z"></path>
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Node JS',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <path
          fill="#8CC84B"
          d="M34.345 4.597c-1.42-.798-3.27-.794-4.691 0-7.116 3.928-14.232 7.856-21.35 11.781-1.385.729-2.319 2.216-2.304 3.76v23.728c-.01 1.573.972 3.075 2.393 3.794 2.044 1.087 4.03 2.285 6.112 3.3 2.404 1.182 5.412 1.443 7.845.211 1.976-1.021 2.853-3.292 2.85-5.379.017-7.83.003-15.662.007-23.493.047-.348-.215-.72-.594-.711-.91-.015-1.82-.009-2.73-.003-.343-.032-.679.253-.653.599-.012 7.78.003 15.563-.007 23.344.02 1.077-.707 2.111-1.745 2.475-2.396.84-9.234-3.6-9.234-3.6a.674.674 0 01-.386-.66V20.26c-.034-.315.16-.6.45-.728 7.093-3.904 14.182-7.818 21.274-11.724a.768.768 0 01.836 0c7.092 3.906 14.183 7.816 21.276 11.72.291.129.477.418.448.732-.001 7.828.002 15.656-.003 23.484a.675.675 0 01-.38.667c-7.027 3.882-14.133 7.64-21.096 11.636-.304.174-.648.371-.988.18-1.831-1.014-3.64-2.066-5.465-3.088-.199-.124-.451-.177-.658-.039-.818.431-1.588.78-2.528 1.153-1.32.522-1.108.736.082 1.429 2.134 1.208 4.272 2.41 6.406 3.62 1.405.877 3.293.939 4.743.129 7.117-3.922 14.232-7.85 21.35-11.771 1.418-.723 2.405-2.219 2.395-3.794V20.138c.014-1.513-.885-2.974-2.228-3.713-7.14-3.946-14.285-7.884-21.427-11.828z"
        ></path>
        <path
          fill="#8CC84B"
          d="M45.084 22.413c-2.794-1.495-6.117-1.574-9.221-1.379-2.243.222-4.601.84-6.235 2.448-1.676 1.616-2.04 4.226-1.245 6.335.57 1.491 2.007 2.46 3.491 2.973 1.913.675 3.922.884 5.931 1.093 1.833.19 3.666.381 5.428.926.72.238 1.558.603 1.778 1.386.204.927-.02 2.005-.772 2.649-2.392 1.893-9.043 1.603-11.406.113-.955-.635-1.367-1.758-1.534-2.829-.019-.333-.287-.64-.65-.614-.906-.01-1.813-.008-2.72-.001-.317-.027-.646.199-.663.522-.187 4.903 4.317 7.04 8.542 7.511 2.414.23 4.88.217 7.257-.301 1.787-.407 3.579-1.156 4.809-2.532 1.517-1.673 1.815-4.163 1.135-6.246-.52-1.555-2.007-2.552-3.526-3.065-2.066-.709-4.514-1.09-6.385-1.268-2.72-.259-5.952-.153-6.722-1.94-.307-.936-.046-2.098.814-2.673 2.276-1.544 6.907-1.339 9.263-.186 1.082.542 1.709 1.655 1.968 2.778.048.33.27.675.652.66.9.018 1.801.005 2.702.006.31.022.648-.153.709-.47-.039-2.348-1.238-4.751-3.4-5.896z"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Tailwind Css',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <path
          fill="#44A8B3"
          d="M18 27.4c1.867-7.466 6.533-11.2 14-11.2 11.2 0 12.6 8.4 18.2 9.8 3.733.933 7-.466 9.8-4.2C58.133 29.267 53.467 33 46 33c-11.2 0-12.6-8.4-18.2-9.8-3.733-.933-7 .467-9.8 4.2zM4 44.2C5.867 36.733 10.533 33 18 33c11.2 0 12.6 8.4 18.2 9.8 3.733.934 7-.466 9.8-4.2-1.867 7.467-6.533 11.2-14 11.2-11.2 0-12.6-8.4-18.2-9.8-3.733-.933-7 .467-9.8 4.2z"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Typescript',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <path fill="#3178C6" d="M57.376 4H6.624A2.624 2.624 0 004 6.624v50.752A2.624 2.624 0 006.624 60h50.752A2.624 2.624 0 0060 57.376V6.624A2.624 2.624 0 0057.376 4z"></path>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M36.49 47.518v6.136c1.115.55 2.303.938 3.528 1.15 1.416.261 2.852.39 4.292.384a19.935 19.935 0 004.176-.422 10.22 10.22 0 003.47-1.4 7.084 7.084 0 002.362-2.532 8.938 8.938 0 00.372-6.788 6.817 6.817 0 00-1.434-2.234 10.47 10.47 0 00-2.246-1.754 24.052 24.052 0 00-2.954-1.468c-.8-.332-1.52-.655-2.16-.968a11.01 11.01 0 01-1.626-.958 4.179 4.179 0 01-1.032-1.036 2.182 2.182 0 01-.362-1.236c-.005-.404.107-.8.324-1.142a2.8 2.8 0 01.918-.872c.45-.265.94-.456 1.452-.566a8.425 8.425 0 011.912-.2c.54.002 1.08.04 1.616.116a12.596 12.596 0 013.384.954 9.313 9.313 0 011.502.844V27.8a15.016 15.016 0 00-3.05-.8 24.853 24.853 0 00-3.8-.258c-1.39-.007-2.776.15-4.128.47a10.48 10.48 0 00-3.432 1.466 7.31 7.31 0 00-2.342 2.542 7.461 7.461 0 00-.862 3.69 7.176 7.176 0 001.578 4.68 12 12 0 004.79 3.278c.84.347 1.623.686 2.35 1.018.656.292 1.286.638 1.884 1.034.483.314.906.71 1.252 1.17a2.4 2.4 0 01.46 1.438 2.2 2.2 0 01-.288 1.104 2.538 2.538 0 01-.87.882c-.449.274-.94.47-1.452.584a8.75 8.75 0 01-2.036.21 11.546 11.546 0 01-3.938-.7 11.747 11.747 0 01-3.61-2.09zM26.182 32.242h8v-5.054H11.876v5.054h7.964V54.75h6.342V32.242z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Laravel',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <path
          fill="#FF2D20"
          d="M26.286 47.17l20.92-11.94-9.504-5.472-20.906 12.038 9.49 5.374zm21.882-24.422l-9.514-5.472V28.11l9.516 5.474-.002-10.836zm.95-12.592l-9.512 5.472 9.512 5.472 9.51-5.474-9.51-5.47zm-29.296 27.7l5.52-3.178V10.81l-9.516 5.476v23.868l3.996-2.298zM14.874 3.692L5.362 9.166l9.512 5.474 9.506-5.474-9.506-5.474zm-10.466 7.12v36.904L25.336 59.76V48.818l-10.944-6.192c-.036-.026-.064-.054-.102-.078-.028-.026-.06-.046-.088-.068l-.002-.006a.525.525 0 01-.078-.098l-.002-.002a.388.388 0 01-.07-.09l-.002-.002h-.006a1.197 1.197 0 01-.048-.11l-.002-.008c-.014-.03-.03-.064-.044-.102l-.002-.006a1.239 1.239 0 01-.02-.14v-.004a1.221 1.221 0 01-.016-.102V16.29l-5.514-3.18-3.988-2.298zM48.17 47.714V36.87L27.242 48.818v10.94L48.17 47.714zM59.578 28.11V17.276l-9.512 5.474v10.834l9.512-5.474zm1.872-12.73a.913.913 0 01.036.252v13.026c0 .352-.19.658-.474.822l-.004.002-10.936 6.298v12.482c0 .35-.19.656-.472.822l-.004.002-22.832 13.14a.785.785 0 01-.162.066l-.006.002-.06.026a.869.869 0 01-.492-.002l.006.002a.304.304 0 01-.078-.032l.002.002a1.642 1.642 0 01-.164-.066l.008.004-22.826-13.14a.952.952 0 01-.478-.824V9.168c0-.088.014-.174.038-.254l-.002.006c.008-.03.026-.05.036-.08.018-.058.038-.106.06-.152l-.002.006a.368.368 0 01.058-.084l.084-.114.094-.068c.036-.03.068-.06.104-.086h.002l11.416-6.57a.938.938 0 01.952.002l-.004-.002 11.42 6.57c.038.026.07.054.102.084l.096.068c.032.036.05.076.084.114a.42.42 0 01.062.082l.002.002c.02.04.04.088.058.138l.002.008.032.08a.8.8 0 01.036.236v24.428l9.512-5.474V15.626v-.004c0-.086.012-.17.034-.25l-.002.006c.008-.026.026-.05.032-.08.02-.06.04-.108.064-.156l-.004.008c.018-.03.046-.05.064-.084.03-.038.054-.076.084-.108a.604.604 0 01.09-.07l.002-.002c.036-.026.066-.058.104-.08h.002l11.416-6.572a.938.938 0 01.952.002l-.004-.002 11.416 6.572c.04.026.068.054.106.078.03.026.064.046.092.07.032.036.056.076.086.112a.596.596 0 01.06.08l.002.002a.797.797 0 01.06.146l.002.006c.016.024.028.05.038.078l-.002.002z"
        ></path>
      </svg>
    ),
  },
  {
    id: 7,
    title: 'figma',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64">
        <path fill="#1ABCFE" fillRule="evenodd" d="M32 32a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd"></path>
        <path fill="#0ACF83" fillRule="evenodd" d="M16 48a8 8 0 018-8h8v8a8 8 0 01-16 0z" clipRule="evenodd"></path>
        <path fill="#FF7262" fillRule="evenodd" d="M32 8v16h8a8 8 0 000-16h-8z" clipRule="evenodd"></path>
        <path fill="#F24E1E" fillRule="evenodd" d="M16 16a8 8 0 008 8h8V8h-8a8 8 0 00-8 8z" clipRule="evenodd"></path>
        <path fill="#A259FF" fillRule="evenodd" d="M16 32a8 8 0 008 8h8V24h-8a8 8 0 00-8 8z" clipRule="evenodd"></path>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'MySQL',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g fillRule="evenodd">
          <path fill="#5d87a1" d="M8.785 6.865a3.055 3.055 0 00-.785.1V7h.038a6.461 6.461 0 00.612.785c.154.306.288.611.441.917l.038-.039a1.074 1.074 0 00.4-.957 4.314 4.314 0 01-.23-.4c-.115-.191-.364-.287-.517-.44"></path>
          <path
            fill="#00758f"
            d="M27.78 23.553a8.849 8.849 0 00-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467 4.467 0 00.995 1.167c.4.306.8.611 1.225.879.745.461 1.588.728 2.314 1.187.422.268.842.612 1.264.9.21.153.343.4.611.5v-.058a3.844 3.844 0 00-.291-.613c-.191-.19-.383-.363-.575-.554a9.118 9.118 0 00-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69 7.69 0 001.321-.308c.65-.172 1.243-.133 1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338 25.338 0 00-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594 7.594 0 01-.776-1.457 46.84 46.84 0 01-1.551-3.293 20.236 20.236 0 00-.965-2.157A19.078 19.078 0 0011.609 5a9.07 9.07 0 00-2.421-.776c-.474-.02-.946-.057-1.419-.075a7.55 7.55 0 01-.869-.664C5.818 2.8 3.038 1.328 2.242 3.277 1.732 4.508 3 5.718 3.435 6.343A8.866 8.866 0 014.4 7.762c.133.322.171.663.3 1a22.556 22.556 0 00.987 2.538 8.946 8.946 0 00.7 1.172c.153.209.417.3.474.645a5.421 5.421 0 00-.436 1.419 8.336 8.336 0 00.549 6.358c.3.473 1.022 1.514 1.987 1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53v.184s.483 1.061.723 1.6a10.813 10.813 0 002.4 2.59A3.514 3.514 0 0114 24.657V25h.427a1.054 1.054 0 00-.427-.788 9.4 9.4 0 01-.959-1.16 24.992 24.992 0 01-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266 7.266 0 00-.884 1.313 11.419 11.419 0 00-.517 2.921c-.073.02-.037 0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756 8.756 0 01-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767 7.767 0 01-.663-1.237C5.912 9.5 5.69 8.3 5.212 7.216a10.4 10.4 0 00-.921-1.489A9.586 9.586 0 013.276 4.22c-.092-.213-.221-.561-.074-.793a.3.3 0 01.259-.252c.238-.212.921.058 1.16.174a9.2 9.2 0 011.824.967c.258.194.866.685.866.685h.18c.612.133 1.3.037 1.876.21a12.247 12.247 0 012.755 1.32 16.981 16.981 0 015.969 6.545c.23.439.327.842.537 1.3.4.94.9 1.9 1.3 2.814a12.578 12.578 0 001.36 2.564c.286.4 1.435.612 1.952.822a13.7 13.7 0 011.32.535c.651.4 1.3.861 1.913 1.3.305.23 1.262.708 1.32 1.091"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 9,
    title: 'MongoDB',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g>
          <defs>
            <linearGradient id="a" x1="-645.732" x2="-654.59" y1="839.188" y2="839.25" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse">
              <stop offset="0.231" stopColor="#999875"></stop>
              <stop offset="0.563" stopColor="#9b9977"></stop>
              <stop offset="0.683" stopColor="#a09f7e"></stop>
              <stop offset="0.768" stopColor="#a9a889"></stop>
              <stop offset="0.837" stopColor="#b7b69a"></stop>
              <stop offset="0.896" stopColor="#c9c7b0"></stop>
              <stop offset="0.948" stopColor="#deddcb"></stop>
              <stop offset="0.994" stopColor="#f8f6eb"></stop>
              <stop offset="1" stopColor="#fbf9ef"></stop>
            </linearGradient>
            <linearGradient id="b" x1="-644.287" x2="-657.028" y1="823.405" y2="845.476" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#48a547"></stop>
              <stop offset="1" stopColor="#3f9143"></stop>
            </linearGradient>
            <linearGradient id="c" x1="-643.386" x2="-652.418" y1="839.485" y2="833.417" gradientTransform="matrix(-.977 -.323 -.29 .877 -375.944 -928.287)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#41a247"></stop>
              <stop offset="0.352" stopColor="#4ba74b"></stop>
              <stop offset="0.956" stopColor="#67b554"></stop>
              <stop offset="1" stopColor="#69b655"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#a)" d="M16.62 30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741 3.423-.149a2.712 2.712 0 00-1.333 1.523A14.1 14.1 0 0016.62 30z"></path>
          <path fill="url(#b)" d="M17.026 26.329a13.223 13.223 0 005-13.225c-1.47-6.485-4.951-8.617-5.326-9.431a9.792 9.792 0 01-.825-1.6l.277 18.069s-.574 5.522.874 6.187z"></path>
          <path fill="url(#c)" d="M15.487 26.569S9.366 22.4 9.72 15.025a15.54 15.54 0 015.519-11.648A1.725 1.725 0 0015.846 2c.381.82.319 12.243.359 13.579.155 5.197-.289 10.009-.718 10.99z"></path>
        </g>
      </svg>
    ),
  },
  {
    id: 10,
    title: 'Postgresql',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g>
          <path d="M29.507 18.773a1.378 1.378 0 00-1.144-.921 2.619 2.619 0 00-.913.051 8.2 8.2 0 01-1.406.185 27.125 27.125 0 002.872-6.83c.953-3.689.444-5.369-.151-6.13A8.239 8.239 0 0022.121 2a11.773 11.773 0 00-3.453.484 12.858 12.858 0 00-2.02-.184 6.565 6.565 0 00-3.518.867 16.039 16.039 0 00-2.484-.624 7.694 7.694 0 00-5.819.924C3.093 4.691 2.289 6.819 2.438 9.792a36.351 36.351 0 001.406 6.538 22.579 22.579 0 001.514 3.863A4.786 4.786 0 007.8 22.742a2.4 2.4 0 002.379-.516 2.08 2.08 0 00.5.43 3.328 3.328 0 00.944.4 5.069 5.069 0 003.3-.2c.006.171.011.335.014.477.006.229.013.454.021.665a11.641 11.641 0 00.441 3.3c.016.043.037.107.059.176a3.975 3.975 0 00.991 1.745 2.955 2.955 0 002.09.777 4.7 4.7 0 00.977-.109 4.592 4.592 0 003.091-1.787c.811-1.155 1.206-2.894 1.277-5.635l.026-.222.017-.145.191.017h.049a7.562 7.562 0 003.163-.548c.631-.293 2.654-1.361 2.177-2.8"></path>
          <path
            fill="#336791"
            d="M27.689 19.053c-3.163.652-3.38-.418-3.38-.418 3.339-4.955 4.735-11.245 3.53-12.784-3.286-4.2-8.975-2.213-9.07-2.162l-.031.006a11.28 11.28 0 00-2.11-.22 5.212 5.212 0 00-3.34 1S3.14.294 3.612 9.733c.1 2.008 2.878 15.194 6.191 11.211 1.211-1.456 2.381-2.688 2.381-2.688a3.071 3.071 0 002.006.512l.057-.048a2.21 2.21 0 00.023.567c-.854.954-.6 1.121-2.309 1.472-1.726.356-.712.989-.05 1.155a3.508 3.508 0 003.915-1.272l-.05.2c.334.268.569 1.742.53 3.079a8.481 8.481 0 00.2 2.971c.264.717.526 2.329 2.769 1.849a3.307 3.307 0 002.98-3.179c.1-1.234.313-1.052.326-2.155l.174-.522c.2-1.673.032-2.213 1.186-1.962l.281.025a6.4 6.4 0 002.615-.44c1.406-.652 2.239-1.742.853-1.455"
          ></path>
          <path
            fill="#fff"
            d="M13.882 10.631a.981.981 0 00-.674.1.247.247 0 00-.1.164.48.48 0 00.117.314.881.881 0 00.559.349.637.637 0 00.09.006.725.725 0 00.687-.467c.035-.248-.326-.414-.676-.463m9.442.008c-.027-.195-.374-.25-.7-.2s-.647.194-.62.389a.667.667 0 00.62.411.592.592 0 00.083-.006.8.8 0 00.451-.247.5.5 0 00.169-.343"
          ></path>
          <path
            fill="#fff"
            d="M28.741 18.979c-.121-.365-.509-.482-1.154-.349-1.915.4-2.6.121-2.826-.044a26.327 26.327 0 003.373-7.565 14.374 14.374 0 00.5-3.253 3.513 3.513 0 00-.509-2.2 7.482 7.482 0 00-6.049-2.825 10.363 10.363 0 00-3.5.551 8.717 8.717 0 00-1.968-.253 5.684 5.684 0 00-3.372.929 15.051 15.051 0 00-2.74-.718 6.978 6.978 0 00-5.242.805c-1.5 1.064-2.2 2.966-2.061 5.653a35.489 35.489 0 001.373 6.348c1.07 3.505 2.233 5.49 3.457 5.9a1.548 1.548 0 00.491.081 2.049 2.049 0 001.563-.886q1.042-1.25 2.155-2.438a3.472 3.472 0 001.55.417v.042q-.14.166-.273.338c-.375.475-.452.574-1.658.823-.343.071-1.254.259-1.267.9-.014.7 1.077.991 1.2 1.022a5.144 5.144 0 001.249.162 3.634 3.634 0 002.5-.934 23.674 23.674 0 00.381 5.684 2.854 2.854 0 002.729 2.1 4.378 4.378 0 00.917-.1 3.462 3.462 0 003.156-3.212c.177-1.026.481-3.475.624-4.789a3.859 3.859 0 001.11.137 6.6 6.6 0 002.519-.48c.712-.331 2-1.141 1.763-1.846zm-4.69-8.879a7.968 7.968 0 01-.116 1.107 10.229 10.229 0 00-.14 1.3 9.859 9.859 0 00.1 1.47 5.236 5.236 0 01-.229 2.986 3.882 3.882 0 01-.207-.426c-.058-.141-.185-.368-.359-.681-.68-1.22-2.274-4.078-1.458-5.244.243-.347.86-.7 2.408-.512zm-1.877-6.569a6.617 6.617 0 015.334 2.522c.975 1.245-.1 6.912-3.205 11.8l-.094-.119-.039-.049a5.524 5.524 0 00.506-3.8 9.114 9.114 0 01-.1-1.352 9.572 9.572 0 01.131-1.206 7.614 7.614 0 00.123-1.493.619.619 0 00.013-.21 8.381 8.381 0 00-1.912-3.6 8.61 8.61 0 00-3.039-2.284 10.246 10.246 0 012.28-.214zM9.479 20.654c-.627.754-1.061.61-1.2.562-.928-.31-2.006-2.272-2.955-5.384a35.167 35.167 0 01-1.34-6.159c-.12-2.4.462-4.074 1.73-4.974 2.063-1.463 5.456-.587 6.819-.143-.02.019-.04.037-.059.057-2.237 2.259-2.184 6.119-2.178 6.355 0 .091.007.22.018.4a15.969 15.969 0 01-.081 3.226 4.08 4.08 0 001.067 3.413q.133.138.278.262a55.7 55.7 0 00-2.1 2.385zm2.39-3.19a3.3 3.3 0 01-.865-2.764 16.7 16.7 0 00.087-3.381 15.422 15.422 0 01-.014-.243A4.3 4.3 0 0114 10.223a1.188 1.188 0 01.918 1.026c.646 2.989.085 4.234-.365 5.235-.093.206-.181.4-.255.6l-.058.156a10.218 10.218 0 00-.368 1.109 2.788 2.788 0 01-2-.887zm.113 4.03a1.733 1.733 0 01-.523-.225 2.553 2.553 0 01.557-.166c1.418-.292 1.637-.5 2.116-1.105.11-.139.234-.3.406-.489.256-.287.374-.238.586-.15a.829.829 0 01.408.525.585.585 0 01-.05.491 3.1 3.1 0 01-3.499 1.12zm7.424 6.906a2.113 2.113 0 01-2.754-1.526 31.129 31.129 0 01-.3-6.853.392.392 0 00-.017-.124 1.643 1.643 0 00-.048-.23 1.589 1.589 0 00-.862-1.034 1.216 1.216 0 00-.793-.1 9.586 9.586 0 01.342-1.022l.058-.157c.066-.177.148-.36.235-.554.471-1.047 1.117-2.482.416-5.722a2.044 2.044 0 00-2.468-1.669 5.694 5.694 0 00-1.887.591c-.078.04-.15.078-.216.115a8.244 8.244 0 011.918-4.952 4.711 4.711 0 013.57-1.336 7.567 7.567 0 015.781 2.763 8.774 8.774 0 011.582 2.71c-1.463-.149-2.458.14-2.962.861-1.1 1.568.6 4.612 1.416 6.075.15.268.279.5.319.6a5.432 5.432 0 00.861 1.387c.077.1.152.189.208.271-.443.128-1.239.423-1.166 1.9-.058.74-.474 4.205-.686 5.43-.279 1.617-.874 2.22-2.548 2.579zm7.242-8.288a5.714 5.714 0 01-1.931.4 2.422 2.422 0 01-1.3-.167c-.045-.919.3-1.015.66-1.117.057-.016.112-.032.166-.05a1.353 1.353 0 00.11.08c.639.422 1.78.467 3.39.135h.018a4.334 4.334 0 01-1.116.72z"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 11,
    title: 'Git',
    icon: (props: LucideProps) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
        <g>
          <path fill="#EE513B" d="M2.585 17.413a1.999 1.999 0 010-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0L2.585 17.413z"></path>
          <path fill="#fff" d="M12.149 5.062l-1.215 1.215 3.139 3.139A2.126 2.126 0 0015.25 12.3v7.679a2.126 2.126 0 101.718.097v-7.765l3 3a2.125 2.125 0 101.283-1.147l-3.221-3.223a2.125 2.125 0 00-2.66-2.66l-3.221-3.22z"></path>
        </g>
      </svg>
    ),
  },
];

export default SKILL_LIST;

import { useTranslation } from 'react-i18next';
import CyberIcon from './CyberIcon';

export default function CyberTerminal() {
  const { t } = useTranslation();

  return (
    <div
      className="terminal-window relative overflow-hidden rounded-xl border border-[#385446] bg-[#070e13]"
      aria-label={t('terminal.label')}
    >
      <div className="flex items-center justify-between border-b border-[#284137] bg-[#14201f] px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#fa7977]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e6bf60]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8ae99b]" />
        </div>

        <span className="mono text-[10px] tracking-wider text-[#9db3ae]">
          root@cyberlab: ~/security
        </span>

        <CyberIcon name="terminal" size={15} />
      </div>

      <div className="relative px-6 py-7 sm:px-8 sm:py-9">
        <div className="scanline" />

        <div className="mono relative space-y-4 text-[12px] leading-7 sm:text-[13px]">
          <p>
            <span className="text-brand">root@cyberlab</span>
            <span className="text-[#7e999a]">:~$ </span>
            <span className="text-white">
              ./initialize_security.sh
            </span>
          </p>

          <p className="text-[#839b9b]">
            [INFO] {t('terminal.initializing')}
          </p>

          <div className="space-y-2 border-l border-[#365b44] pl-4">
            {[
              t('terminal.network'),
              t('terminal.encryption'),
              t('terminal.firewall'),
            ].map((message) => (
              <p key={message} className="text-[#b0c7c6]">
                [<span className="text-brand">OK</span>] {message}
              </p>
            ))}
          </div>

          <p className="pt-2 text-brand">
            &gt;&gt; {t('terminal.ready')}
          </p>

          <div className="rounded-md border border-[#29493c] bg-[#101d1c] p-4">
            <p className="text-[#7da99a]">
             {'// SYSTEM STATUS'}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[#dbe9df]">
                DEFENSE SYSTEM
              </span>

              <span className="rounded bg-brand/10 px-2 py-1 font-bold text-brand">
                ACTIVE
              </span>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#253b35]">
              <div className="h-full w-[91%] rounded-full bg-brand shadow-[0_0_15px_#a5ff46]" />
            </div>
          </div>

          <p>
            <span className="text-brand">root@cyberlab</span>
            <span className="text-[#7e999a]">:~$ </span>
            <span
              className="inline-block h-4 w-2 bg-brand align-middle"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

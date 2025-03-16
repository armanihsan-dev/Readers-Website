import { TypingAnimation } from '@/components/magicui/typing-animation';

export function TypingAnimationDemo({ text }) {
  return (
    <TypingAnimation className='text-2xl lg:text-5xl"'>{text}</TypingAnimation>
  );
}

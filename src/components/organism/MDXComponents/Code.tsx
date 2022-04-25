import clsx from 'clsx'

const Code: React.FC = (props) => {
  return (
    <code
      className={clsx(
        'py-1 px-1.5 font-normal rounded border',
        'bg-transparent text-theme-700 dark:text-theme-200',
        'border-theme-300 dark:border-theme-700'
      )}
    >
      <span>{props.children}</span>
    </code>
  )
}

export default Code

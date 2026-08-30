import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

interface DescriptionOptions {
  /**
   * CSS class to apply to the description container
   */
  className?: string
}

const defaultOptions: DescriptionOptions = {
  className: "content-description",
}

export default ((opts?: Partial<DescriptionOptions>) => {
  const options: DescriptionOptions = { ...defaultOptions, ...opts }

  function Description({ fileData, displayClass }: QuartzComponentProps) {
    const description = fileData.description

    if (!description) {
      return null
    }

    return (
      <p class={classNames(displayClass, options.className)}>
        {description}
      </p>
    )
  }

  Description.css = `
    .content-description {
      margin-top: 0;
      margin-bottom: 1rem;
      color: var(--gray);
      font-style: italic;
      font-size: 0.95em;
      line-height: 1.5;
    }
  `

  return Description
}) satisfies QuartzComponentConstructor

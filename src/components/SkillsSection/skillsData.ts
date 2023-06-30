import { BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { DiJavascript1, DiSass } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { IconType } from 'react-icons/lib'

interface SkillData {
  id: number
  name: string
  icon: IconType
}

const skillsData: SkillData[] = [
  {
    id: 1,
    name: 'React',
    icon: BiLogoReact,
  },
  {
    id: 2,
    name: 'Next.js',
    icon: TbBrandNextjs,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: DiJavascript1,
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: TbBrandTypescript,
  },
  {
    id: 5,
    name: 'Redux',
    icon: SiRedux,
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    icon: BiLogoTailwindCss,
  },
  {
    id: 7,
    name: 'Sass',
    icon: DiSass,
  },
]

export default skillsData

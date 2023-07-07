import { Image } from '@/components/common/Image'
import { Link } from '@/components/common/Link'
import { sns } from '@/config/sns'

export const Profile = () => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/author.jpeg"
      />
      <h1 className="text-2xl font-semibold text-primary-1">なる</h1>
    </div>

    <p className="text-primary-1">
      アイデアとエンジニアのマッチングアプリ
      <br />
      http://ideee.tech の制作者
      <br />
      フリーランスエンジニア
      <br />
      TechコミュニティIncrement.運営
      <br />
      とにかくほめるLT会主催
      <br />
      世の中の「もったいない」をITの力で無くすためサービスづくり中🚀
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
)

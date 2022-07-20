import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import * as locales from '../assets/locales';

const Conception = () => {

	const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])
	
	const [active, setActive] = useState(null);
  useEffect(() => {
    if (data) setActive(data.knowhow.tabs[0])
  },[data])

	return (
		<>
		{data && (
			<section className='lavender-bg'>
			<div className='margin-lr padding-tb'>
				<div className='padding-tb'>
					<h3>{data.knowhow.conceptiontitle}</h3>
					<br />
					<p>{data.knowhow.conceptiontext}</p>
				</div>
				<br />
				<div className='content-col'>
					{data.knowhow.tabs.map(tab => (
						<div onClick={(() => setActive(tab))} key={tab.id} className='column-6'>
							<img src={active === tab ? tab.hoverImage : tab.image} />
							<h4>{tab.name}</h4>
						</div>
					))}
					<div className='content-col'>
						{active &&
							<>
								<div className='column-2 conception'>
									<img src={active.contentImage} />
								</div>
							</>
						}

						{active &&
							<>
								<div className='column-2'>
									<div>
										<h3 className='padding-tb'>{active.title}</h3>
										<p>{active.content}</p>
									</div>
								</div>
							</>
						}
					</div>

				</div>
			</div>
		</section>
		)}
		</>
	)
}

export default Conception;

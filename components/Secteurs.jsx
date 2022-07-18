import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import secteurs from '../public/locales/secteurs.json';
import Link from 'next/link';
import * as locales from '../assets/locales';


const Secteurs = () => {

	const [active, setActive] = useState(null);

	const { locale } = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(locales[locale])
  },[locale])
	return (
		<>
		{ data && (
			<div className='content-col'>
			{data.landing.activities.map(activity => (
				<div onClick={(() => setActive(activity))} key={activity.name} className={`${active != null ? 'column-6' : 'column-3'} ${active === activity ? 'selected' : ''} onhover`}>
					<img src={activity.image} />
					<h4>{activity.name}</h4>
				</div>
			))}
			<div className='content-col'>
				{active &&
					<>
						<div className='column-2'>
							<img src={active.image} />
						</div>
					</>
				}

				{active &&
					<>
						<div className='column-2'>
							<div>
								<h3 className='padding-tb'>{active.name}</h3>
								<p>{active.content}</p>
								<div className='content-col margin-top'>
									{secteurs.secteurs[active.id - 1].solutions.map(solution => (
										<Link href={solution.href} key={solution.name}>
											<div className='column-2 onhover'>
												<div className='padding-lr'>
													<div className='content-col'>
														<div className='column-2-no-gap'><h5 className={`${solution.color}`}>{solution.name}</h5></div>
														<div className='column-2-no-gap'>
															<img src={solution.img} />
														</div>

														<p className='margin-bottom'>{solution.text}</p>

													</div>
												</div>
											</div>
										</Link>

									))}
								</div>

							</div>

						</div>
					</>
				}
			</div>
		</div>
		)}
		</>
	)
}

export default Secteurs;

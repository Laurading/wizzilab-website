import React, { useState } from 'react';
import secteurs from '../public/locales/secteurs.json';
import Link from 'next/link';


const Secteurs = () => {
	const [active, setActive] = useState(null);
	return (
		
				<div className='content-col'>
					{secteurs.secteurs.map(secteur => (
						<div onClick={(() => setActive(secteur))} key={secteur.name} className={`${active != null ? 'column-6' : 'column-3'} ${active === secteur ? 'selected' : ''} onhover`}>
							<img src={secteur.image} />
							<h4>{secteur.name}</h4>
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
	)
}

export default Secteurs;

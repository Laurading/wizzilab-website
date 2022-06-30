import React, { useState } from 'react';
import conception from '../conception.json';
import Link from 'next/link';


const Conception = () => {
	const [active, setActive] = useState(conception.tabs[0]);
	return (
		<section className='lavender-bg'>
            <div className='margin-lr padding-bottom'>
                <h3 className='padding-tb'>Une philosophie de conception</h3>
                <p>Chez Wizzilab, nous mettons en pratique une philosophie de conception spécifique:</p>
                <br/>
				<div className='content-col'>
					{conception.tabs.map(tab => (
						<div onClick={(() => setActive(tab))} key={tab.id} className='column-6'>
							<img src={active === tab ? tab.hoverImage : tab.image}/>
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
	)
}

export default Conception;

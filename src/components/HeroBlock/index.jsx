import React from 'react'
import Button from '../Button'
import * as S from './styled'

export default ({ thumbnail, title, altTitle, body, buttonLabel, buttonURL }) => (
	<S.HeroBlock className="flex flex-col xl:flex-row">
		<S.HeroImageContainer>
			<S.HeroImage
				className="w-full h-full"
				style={{backgroundImage: `url(${thumbnail})`}}
				alt=""
			/>
		</S.HeroImageContainer>
		<S.HeroContent className="p-10 lg:p-16">
			<span className="title-alt block font-thin text-base font-sans tracking-normal">
				{altTitle}
			</span>
			<h2 className="title font-headline text-5xl leading-10 font-semibold mb-5">
				{title}
			</h2>
			<div className="font-sans text-sm leading-loose">
				<div className="body mb-3 pt-2">
					{body}
				</div>
			</div>
			{!!buttonLabel && !!buttonURL && 
				(
					<Button url={buttonURL}>
						{buttonLabel}
					</Button>			
				)
			}

		</S.HeroContent>
	</S.HeroBlock>
)
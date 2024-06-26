import { generateRandomString } from '@/app/_lib/utils/helpers';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import PostItem from '../post/post-item';

const PostBlock = ({ key }: any) => {
	return (
		<div
			key={key}
			className={'flex flex-col gap-2 [&>*:nth-child(odd)]:'}
		>
			<Dialog>
				<DialogTrigger>
					<Image
						alt="An image"
						className="aspect-video object-cover rounded-lg"
						height="225"
						src={`https://picsum.photos/225/400?hmac=${generateRandomString(
							5,
						)}`}
						unoptimized
						width="400"
					/>
				</DialogTrigger>
				<DialogContent>
					<Image
						alt="An image"
						className="aspect-video object-cover rounded-lg"
						height="500"
						src={`https://picsum.photos/225/400?hmac=${generateRandomString(
							5,
						)}`}
						unoptimized
						// fill
						width="600"
					/>
				</DialogContent>
			</Dialog>

			<div className="flex flex-col gap-1.5">
				<div className="text-xl font-semibold">
					A day at the beach
				</div>
				<div className="text-sm text-gray-500 dark:text-gray-400">
					I love the sound of waves crashing on the shore.
					So peaceful. 🌊
				</div>
			</div>
		</div>
	);
};

export default PostBlock;

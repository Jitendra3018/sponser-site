import { useState } from "react";

export default function Home() {
	const [amount, setAmount] = useState<number | null>(200);
	return (
		<div className="flex h-screen w-screen items-center justify-evenly bg-slate-900 p-10">
			<div className="w-1/2">
				<h2 className="text-5xl font-bold text-cyan-300">
					Love what I do? Feel free to support me with a donation!
				</h2>
				<p className="mt-20 text-gray-50">
					Thanks in advance. Each donation of yours means a lot,
					however little it might be!
				</p>
			</div>
			<div className="flex w-96 flex-col items-center space-y-5 rounded-md bg-blue-500 p-10">
				<div className="flex w-full items-center rounded-lg bg-gray-100/30 text-white focus:outline-none">
					<p className="rounded-l-lg bg-gray-300 px-4 py-3 text-lg text-black">
						INR
					</p>
					<input
						type="number"
						className="w-full rounded-lg bg-transparent px-4 py-3 text-white placeholder-gray-50 transition duration-200 focus:outline-none"
						placeholder="Enter Amount"
						value={amount ? amount : ""}
						onChange={(e) => setAmount(parseInt(e.target.value))}
					/>
				</div>
				<button className="w-full rounded-lg bg-cyan-300 py-3 text-xl font-semibold hover:bg-cyan-400 ">
					<span>Sponsor</span>
				</button>
			</div>
		</div>
	);
}

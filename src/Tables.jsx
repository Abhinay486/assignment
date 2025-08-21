import React from "react";
import {
	Home,
	Table2,
	CreditCard,
	Settings,
	LogIn,
	User,
	UserPlus,
	HelpCircle,
	ChevronRight,
	Search,
	CheckCircle2,
	Circle,
} from "lucide-react";

// Small helpers copied to keep UI parity with App.jsx
const NavItem = ({ icon, label, active }) => {
	const iconEl = React.createElement(icon, { size: 18, className: "shrink-0" });
	return (
		<button
			className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
				active
					? "bg-white text-slate-800 shadow-sm"
					: "text-slate-600 hover:bg-white/60 hover:text-slate-900"
			}`}
		>
			{iconEl}
			<span>{label}</span>
		</button>
	);
};

const Card = ({ title, children, right }) => (
	<div className="bg-white rounded-2xl shadow-sm p-6">
		<div className="flex items-center justify-between">
			<h3 className="text-slate-800 font-extrabold">{title}</h3>
			{right}
		</div>
		<div className="mt-4">{children}</div>
	</div>
);

const StatusPill = ({ ok }) => (
	<span
		className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
			ok
				? "text-emerald-700 bg-emerald-50 border border-emerald-200"
				: "text-amber-700 bg-amber-50 border border-amber-200"
		}`}
	>
		{ok ? <CheckCircle2 size={12} /> : <Circle size={12} />}
		{ok ? "Online" : "Offline"}
	</span>
);

const ProgressBar = ({ value }) => (
	<div className="w-32">
		<div className="h-2 rounded-full bg-slate-200 overflow-hidden">
			<div
				className="h-full bg-gradient-to-r from-sky-500 to-indigo-500"
				style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
			/>
		</div>
	</div>
);

export default function Tables() {
	const authors = [
		{
			name: "Esthera Jackson",
			role: "Product Manager",
			dept: "Organization",
			status: true,
			employed: "23/04/18",
			initials: "EJ",
			hue: "bg-indigo-500",
		},
		{
			name: "Alexa Liras",
			role: "Programmer",
			dept: "Developer",
			status: false,
			employed: "11/01/19",
			initials: "AL",
			hue: "bg-sky-500",
		},
		{
			name: "Laurent Perrier",
			role: "Executive",
			dept: "Projects",
			status: true,
			employed: "19/09/17",
			initials: "LP",
			hue: "bg-violet-500",
		},
		{
			name: "Michael Levi",
			role: "Backend Developer",
			dept: "Developer",
			status: true,
			employed: "24/12/08",
			initials: "ML",
			hue: "bg-rose-500",
		},
	];

	const projects = [
		{ project: "Soft UI XD Version", budget: "$14,000", status: "Working", progress: 60 },
		{ project: "Add Progress Track", budget: "$3,000", status: "Canceled", progress: 10 },
		{ project: "Fix Platform Errors", budget: "Not set", status: "Done", progress: 100 },
		{ project: "Launch our Mobile App", budget: "$32,000", status: "Working", progress: 80 },
		{ project: "Add the New Pricing Page", budget: "$400", status: "Pending", progress: 25 },
	];

	return (
		<div className="grid lg:grid-cols-2 gap-6">
			{/* Authors table */}
							<Card title="Authors table">
								<div className="overflow-x-auto">
									<table className="min-w-full text-left text-sm">
										<thead>
											<tr className="text-slate-500">
												<th className="py-3 pr-4 font-semibold">Author</th>
												<th className="py-3 pr-4 font-semibold">Function</th>
												<th className="py-3 pr-4 font-semibold">Status</th>
												<th className="py-3 pr-4 font-semibold">Employed</th>
												<th className="py-3 pr-4 font-semibold text-right">Action</th>
											</tr>
										</thead>
										<tbody>
											{authors.map((a) => (
												<tr key={a.name} className="border-t border-slate-200/70">
													<td className="py-3 pr-4">
														<div className="flex items-center gap-3">
															<div className={`h-9 w-9 rounded-lg text-white grid place-items-center text-xs font-bold ${a.hue}`}>
																{a.initials}
															</div>
															<div>
																<div className="text-slate-800 font-semibold">{a.name}</div>
																<div className="text-xs text-slate-500">{a.dept}</div>
															</div>
														</div>
													</td>
													<td className="py-3 pr-4">
														<div>
															<div className="font-semibold text-slate-700">{a.role}</div>
															<div className="text-xs text-slate-500">{a.dept}</div>
														</div>
													</td>
													<td className="py-3 pr-4">
														<StatusPill ok={a.status} />
													</td>
													<td className="py-3 pr-4 text-slate-600">{a.employed}</td>
													<td className="py-3 pr-0 text-right">
														<button className="text-xs font-semibold text-sky-600 hover:text-sky-700">Edit</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</Card>

							{/* Projects table */}
							<Card
								title="Projects"
								right={<span className="text-xs font-semibold text-emerald-600">30 done this month</span>}
							>
								<div className="overflow-x-auto">
									<table className="min-w-full text-left text-sm">
										<thead>
											<tr className="text-slate-500">
												<th className="py-3 pr-4 font-semibold">Project</th>
												<th className="py-3 pr-4 font-semibold">Budget</th>
												<th className="py-3 pr-4 font-semibold">Status</th>
												<th className="py-3 pr-4 font-semibold">Completion</th>
												<th className="py-3 pr-0 font-semibold text-right">Action</th>
											</tr>
										</thead>
										<tbody>
											{projects.map((p) => (
												<tr key={p.project} className="border-t border-slate-200/70">
													<td className="py-3 pr-4">
														<div className="font-semibold text-slate-800">{p.project}</div>
													</td>
													<td className="py-3 pr-4 text-slate-700">{p.budget}</td>
													<td className="py-3 pr-4">
														<span
															className={`text-xs font-semibold ${
																p.status === "Done"
																	? "text-emerald-600"
																	: p.status === "Working"
																	? "text-sky-600"
																	: p.status === "Pending"
																	? "text-amber-600"
																	: "text-rose-600"
															}`}
														>
															{p.status}
														</span>
													</td>
													<td className="py-3 pr-4">
														<div className="flex items-center gap-3">
															<ProgressBar value={p.progress} />
															<span className="text-xs font-semibold text-slate-600">{p.progress}%</span>
														</div>
													</td>
													<td className="py-3 pr-0 text-right">
														<button className="text-xs font-semibold text-sky-600 hover:text-sky-700">View</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</Card>
						</div>
					);
				}


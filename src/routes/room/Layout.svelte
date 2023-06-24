<section class="flex h-screen flex-row gap-4 p-10">
	<div class="flex w-1/6 min-w-[12rem] flex-initial flex-col gap-4">
		<div class=" grid items-center">
			<slot name="qrCode" />
		</div>
		<slot name="playerList" />
	</div>
	<div class="flex flex-auto flex-col gap-4">
		<div class="h-1/6npm i">
			<slot name="title" />
		</div>
		<div class="h-full outline outline-success">
			<slot name="incidentList" />
		</div>
	</div>
</section>

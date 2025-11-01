
<script lang="ts">
	let { 
		src, 
		alt, 
		tooltipText,
		className = '',
		tooltipPosition = 'top' // 'top', 'bottom', 'left', 'right'
	} = $props<{
		src: string;
		alt: string;
		tooltipText: string;
		className?: string;
		tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
	}>();
	
	let showTooltip = $state(false);
	
	const positionClasses = {
		top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 -translate-y-1/2 ml-2'
	};
</script>

<div class="relative inline-block">
	<img 
		{src} 
		{alt}
		class={className}
		onmouseenter={() => showTooltip = true}
		onmouseleave={() => showTooltip = false}
	/>
	
	{#if showTooltip}
		<div 
			class="absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-xs {positionClasses[tooltipPosition]}"
		>
			{@html tooltipText.replace(/\n/g, '<br>')}
			<!-- Arrow -->
			<div class="absolute w-2 h-2 bg-gray-900 transform rotate-45 {
				tooltipPosition === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
				tooltipPosition === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
				tooltipPosition === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
				'left-[-4px] top-1/2 -translate-y-1/2'
			}"></div>
		</div>
	{/if}
</div>

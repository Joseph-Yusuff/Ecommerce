"use client";

///the component for the Summary of the order using the axios package

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
	return (
		///The divs will design the order summary and price total
		<div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
			<h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
			<div className='mt-6 space-y-4'>
				<div className='flex items-center justify-between border-t border-gray-200 pt-4'>
					<div className='text-base font-medium text-gray-900'>Order total</div>
					<Currency value={45} />
				</div>
			</div>

			<Button className='w-full mt-6'>Checkout</Button>
		</div>
	);
};

export default Summary;
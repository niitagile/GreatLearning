package com.algorithms;
//9 8 7 4 3 2 1
//7 8 9 4 3 2 1
//7 8 9 1  2 3 4
public class ArrayRotation {
	   public void rotate(int[] array) {
	        int mid = (array.length)/2;

	        reverse(array, 0, array.length-1); // 9,8,7,4,3,2,1
	        reverse(array, 0, mid-1); // 7,8,9,4,3,2,1
	        reverse(array, mid, array.length-1); // 7,8,9,1,2,3,4
	    }

	    void reverse(int[] array, int left, int right) {
	        while(left<right) { 

	            int temp = array[left];
	            array[left] = array[right];
	            array[right] = temp;

	            left++;
	            right--;
	        }
	    }
	

		
		public static void main(String ar[] ){
				
			
		}
		
		
		/* 1 2 3 4 7 8 9
		 * 2 3 4 7 8 9 1
		 * 
		 */
		
		
	
}


/*

int temp=arr[mid],temp2=0;
for(int i=mid;i<arr.length-1;i++) {
	/*if( (mid + i) >= arr.length) {
		 temp2  = i+mid-arr.length;
		}
		temp2 = arr[i+1];
		arr[i] = arr[i-mid];
		arr[i-mid] = temp2;

}
arr[arr.length-1]=temp;
*/
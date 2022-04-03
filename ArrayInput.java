package com.algorithms;

import java.util.Scanner;

public class ArrayInput {

	public static void main(String[] args) {
		//Step 1: Take input from user
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the size of array");
		int size = sc.nextInt();
		int array[] = new int[size];
		
		System.out.println("enter the " + size + " elements");
		
		for (int i = 0; i < size; i++) {
			array[i] = sc.nextInt();
		}

		//Step 2 Sort array by using merge sort
		MergeSort msort=new MergeSort();
		msort.sort(array, 0,size-1);
		
		//Step 3 Array Rotation
		ArrayRotation arrrotate=new ArrayRotation();
		arrrotate.rotate(array);


	}

}

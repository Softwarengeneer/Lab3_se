package controller;

import model.Point;

public class AreaResultChecker {
	private AreaResultChecker() {
	}

	public static boolean isPointInArea(Point point) {
		return isCoordinatesInArea(point.getX(), point.getY(), point.getR());
	}

	public static boolean isCoordinatesInArea(double x, double y,int r) {
		return inFirstQuad(x, y, r) ||
				inThirdQuad(x, y, r) ||
				inFourthQuad(x, y, r)
				;
	}

	private static boolean inFirstQuad(double x, double y, int r) {
		return x >= 0 &&
				y >= 0 &&
				x <= r &&
				y <= r
				;
	}

	private static boolean inThirdQuad(double x, double y,int r) {
		return x <= 0 &&
				y <= 0 &&
				x >= - (double)r/2 &&
				y <= r &&
				y <= - x / 2 - r
				;
	}

	private static boolean inFourthQuad(double x, double y, int r) {
		return x <= 0 &&
				y >= 0 &&
				x * x + y * y <= r * r
				;
	}
}

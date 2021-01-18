package model;

import controller.AreaResultChecker;
import controller.DatabaseManager;
import controller.InputValidator;
import lombok.Getter;
import lombok.Setter;
import lombok.SneakyThrows;

import java.io.*;
import java.util.*;

@Getter
@Setter
public class PointsBean implements Serializable {
	private List<Point> pointsCollection = new ArrayList<>();
	
	private Point pointField = new Point();
	private Point pointGraphic = new Point();
	
	
	public void uploadPoints() {
		pointsCollection = DatabaseManager.getInstance().getCollectionFromDataBase();
	}
	
	public void submitFieldPoints() {
		if (InputValidator.isPointValid(pointField))
			addPointWithCalculatedResultToDatabase(pointField);
	}
	
	public void submitGraphicPoints() {
		if (InputValidator.isRValid(pointGraphic.getR()))
			addPointWithCalculatedResultToDatabase(pointGraphic);
	}
	
	public void clear() {
		DatabaseManager.getInstance().removeAllPoints();
	}
	
	@SneakyThrows
	private void addPointWithCalculatedResultToDatabase(Point point) {
		point.setResult(AreaResultChecker.isPointInArea(point));
		DatabaseManager.getInstance().addPoint((Point) point.clone());
	}
}

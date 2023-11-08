package kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.dto;

@lombok.Getter
public class JsonResult {
	private String result;  /* "success" or "fail"  */
	private Object data;    /* if success, data set */
	private String message; /* if fail, message set */
	
	private JsonResult() {
	}

	private JsonResult(Object data) {
		result = "success";
		this.data = data; 
	}

	private JsonResult(String message) {
		result = "fail";
		this.message = message; 
	}

	public static JsonResult success(Object data) {
		return new JsonResult(data);
	}

	public static JsonResult fail(String message) {
		return new JsonResult(message);
	}

}

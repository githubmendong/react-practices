package kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.controller;
import kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.dto.JsonResult;
import kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.vo.TaskVo;
import kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.repository.CardRepository;
import kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private TaskRepository taskRepository;

	@GetMapping("/card")
	public ResponseEntity<JsonResult> readCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult> readTask(Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/task")
	public ResponseEntity<JsonResult> createTask(@RequestBody TaskVo taskVo) {
		taskRepository.insert(taskVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}

	@SuppressWarnings("serial")
	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, String done) {
		taskRepository.updateDone(no, done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(new HashMap<String, Object>() {{
				    put("no", no);
				    put("done", done);
				}}));
	}

}

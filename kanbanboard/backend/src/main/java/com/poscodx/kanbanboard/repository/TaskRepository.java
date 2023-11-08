package kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.repository;

import kanbanboard.backend.src.main.java.com.poscodx.kanbanboard.vo.TaskVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class TaskRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<TaskVo> findAllByCardNo(Long cardNo) {
		return sqlSession.selectList("task.findAllByCardNo", cardNo);
	}

	public Boolean insert(TaskVo taskVo) {
		return sqlSession.insert("task.insert", taskVo) == 1;
	}
	


	public Boolean updateDone(Long no, String done) {
		return sqlSession.update("task.updateDone", new HashMap<String, Object>() {{
		    put("no", no);
		    put("done", done);
		}}) == 1;

	}
}

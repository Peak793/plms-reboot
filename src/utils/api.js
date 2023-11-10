import axios from "axios"
import stripBom from 'strip-bom';

export const getLabChapterInfo = async (groupId, labNo) => {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getLabChapterInfo?group_id=${groupId}&lab_no=${labNo}`, { withCredentials: true })
  return data.payload
}

export const getAllAvailableGroups = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getAllAvailableGroups?year=${import.meta.env.VITE_YEAR}`, { withCredentials: true });
  return data.payload
}

export const getGroupListById = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getGroupListById?year=${import.meta.env.VITE_YEAR}`, { withCredentials: true });
  return data.payload.group_list
}

export const getStudentListInGroupWithLabScore = async (groupId) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getStudentListInGroupWithLabScore?group_id=${groupId}`,
    { withCredentials: true }
  );
  return data.payload;
}

export const getAddExercisePageInfo = async (groupId, chapterId) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getAddExercisePageInfo?group_id=${groupId}&chapter_id=${chapterId}`,
    { withCredentials: true }
  );
  return data;
}

export const getEditExercisePageInfo = async (groupId, exercise_id, chapter_id) => {
  let { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/index.php/supervisor_rest/getEditExercisePageInfo?group_id=${groupId}&exercise_id=${exercise_id}&chapter_id=${chapter_id}`,
    { withCredentials: true }
  );

  if (typeof data === 'string') {
    data = JSON.parse(stripBom(data));
  }

  return data;
}
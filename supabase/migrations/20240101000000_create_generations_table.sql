-- 创建生成历史表
CREATE TABLE IF NOT EXISTS generations (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL,
  model_id TEXT NOT NULL,
  model_name TEXT NOT NULL,
  prompt TEXT NOT NULL,
  parameters JSONB NOT NULL,
  output JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- 创建索引
CREATE INDEX IF NOT EXISTS generations_user_id_idx ON generations(user_id);
CREATE INDEX IF NOT EXISTS generations_model_id_idx ON generations(model_id);
CREATE INDEX IF NOT EXISTS generations_created_at_idx ON generations(created_at DESC);

-- 添加行级安全策略
ALTER TABLE generations ENABLE ROW LEVEL SECURITY;

-- 创建策略：用户只能删除自己的记录
CREATE POLICY "Users can delete their own generations"
  ON generations
  FOR DELETE
  USING (auth.uid()::TEXT = user_id::TEXT);

-- 创建策略：所有人可以查看所有记录
CREATE POLICY "Anyone can view all generations"
  ON generations
  FOR SELECT
  USING (true);

-- 创建策略：用户只能插入自己的记录
CREATE POLICY "Users can insert their own generations"
  ON generations
  FOR INSERT
  WITH CHECK (auth.uid()::TEXT = user_id::TEXT OR auth.uid() IS NULL);

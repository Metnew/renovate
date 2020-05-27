      commitFiles: gsmCommitFilesToBranch,

    it('should set default base branch', async () => {
      await initFakeRepo();
      await gitea.setBaseBranch();

      expect(gsmSetBaseBranch).toHaveBeenCalledTimes(1);
      expect(gsmSetBaseBranch).toHaveBeenCalledWith(mockRepo.default_branch);
    });

    it('should set custom base branch', async () => {
      await initFakeRepo();
      await gitea.setBaseBranch('devel');

      expect(gsmSetBaseBranch).toHaveBeenCalledTimes(1);
      expect(gsmSetBaseBranch).toHaveBeenCalledWith('devel');
    });
      await expect(
        gitea.addReviewers(mockPR.number, ['me', 'you'])
      ).resolves.not.toThrow();
  describe('commitFiles', () => {
      await gitea.commitFiles(commitConfig);